---
layout: post
title: "digesting the english language: hashing & merkle trees"
description: "Building a merkle tree out of the English dictionary and getting the root hash of the English Language"
imagedir: "public/images/2020-10-30"
published: true
---
## introduction
Merkle Trees are something I put off taking a closer look at for a while. Bluntly, I suspected them of being intricate and complicated. Of course that isn't true, they're really just a type of binary tree.

I started with a simple Python implementation to build one out of a list of strings, but then I wanted to take it further. In the end I settled on using C to construct one from an input file containing all the words in the English dictionary. This would amount to over eighty thousand initial data blocks (or words) being reduced to a single 32-byte hash value.

Further experimenting by messing around with the input file showed exactly why these structures are useful for verifying large datasets.

## the core problem
In a decentralised peer-to-peer system, several distinct parties must interact with each other, but do not necessarily trust each other. They keep a copy of a large dataset and, for their interactions to be successful, each copy must be the same, down to the last byte. These datasets are updated by the parties at irregular intervals throughout the day.

How can everyone verify they have the same dataset?

A simplistic way is for each party to take a copy of everyone else's dataset and compare it with their own byte-by-byte. But what if there's thousands of parties? What if the data is sensitive and you don't want it transferred over some network? What if the data changes rapidly and you must go through this process hundreds, or even thousands, of times a day? How big is the data? What's the bandwidth cost on this?

## hashing
A hash (sometimes called a digest) is a unique number calculated from a set of input data and using a specific algorithm. There are several hashing algorithms out there, but this article will focus on the SHA256 algorithm which gives a 32-byte unique number that can be represented as a 64-character hexadecimal string.

Hashing is a one-way algorithm. You will always get the same hash digest from the same data (and using the same hash algorithm) but not the other way around.

## merkle trees
To construct a Merkle Tree a dataset must be split into blocks and a hash taken from each of those blocks. These hashes are then stored in a list of tree nodes that will go on to form the bottom layer, or the leaves, of the tree.  This layer is then split into pairs of nodes and the hash digests stored in each left and right pair node concatenated. These concatenated values are then hashed again, and this hash forms the data point for a node in the layer above, and in between, the pair. Each layer of the tree is built in this fashion until there’s only one node left, the root node. The data in this root node contains the digest of the entire tree. 

The diagram below may help to illustrate the process.

The final root hash is very small (the code in this article will be using the SHA256 hashing algorithm which ultimately results in just a 32-byte digest) and it’s very secure. It can be safely transmitted to other parties without revealing anything about the underlying data used to build the tree.

If each party uses the same hashing algorithm to build their Merkle Tree and builds it against the same data, then the hash value found at the root of each tree will be the same. Parties only need to swap these small hash values around for comparison and verify they are in sync.

There are reams of information about Merkle Trees available all over the internet, so I'm not going to go into more detail, here. If my attempts at explaining in a few sentences don't cut it for you head to your favourite search engine and read one, or more, of the thousands of articles out there.
 
## a python implementation
To start with I put together a simple implementation in Python.

### hashlib
Python has a `hash()` function which will return an integer hash value of any object that can supply one (basically, any object that implements `__hash()__`), but this is  mainly meant to be used for lookups in key/value data-structures (see `set` and `dict`), not for cryptographic hashes. Besides which, using Python's inbuilt `hash()` function would mean all parties having to use Python to build their Merkle Tree, and even the same version of Python in case the algorithm changes from version to version.

I want to use the SHA256 hashing algorithm, a global standard and well known. To do this I need to import `hashlib`.

```python
import hashlib
```

### class node

Next, I define my `node` class.

```python
class Node:

    def __init__(self,
                 left_node=None,
                 right_node=None,
                 data=None,
                 hashed_data=None):
                 
        self.left = left_node
        self.right = right_node
        self.data = data
        self.hashed_data = hashed_data
```

There should be no surprises, here. The class just contains `left` and `right` recursive references to instances of itself (or `None`, of course) and a `hash_digest` variable to store the actual hash value.

### build_tree()

Finally, there’s the `build_tree()` function itself which takes a list of Nodes (the leaves) and builds the Merkle tree itself.

```python
def build_tree(nodes):
    
    if len(nodes) == 1:
        return nodes
    
    node_layer = []
    left_index = 0
    nodes_len = len(nodes)

    while(left_index < nodes_len):
    
        right_index = left_index + 1
    
        if right_index < len(nodes):
        
            left_data_hash = nodes[left_index].hashed_data.hexdigest().encode('utf-8')
            right_data_hash = nodes[right_index].hashed_data.hexdigest().encode('utf-8')

            n = Node(nodes[left_index],
                     nodes[right_index], 
                     nodes[left_index].data + nodes[right_index].data,
                     hashlib.sha256(left_data_hash + right_data_hash))
                     
        else:
        
            left_data_hash = nodes[left_index].hashed_data.hexdigest().encode('utf-8')

            n = Node(nodes[left_index],
                     nodes[left_index], 
                     nodes[left_index].data + nodes[left_index].data,
                     hashlib.sha256(left_data_hash + left_data_hash))

        node_layer.append(n)
        left_index = right_index + 1
    
    if len(node_layer) == 1:
        return node_layer[0]
    else:
        return build_tree(node_layer)
```
