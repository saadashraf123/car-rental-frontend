#!/bin/bash

# Check if the correct number of arguments is provided
if [ $# -ne 2 ]; then
  echo "Error: Two string arguments are required!"
  exit 1
fi

# Assign the arguments to variables
directory_name=$1
node_name=$2

# Validate the case restrictions
if ! [[ $directory_name =~ ^[a-z]+$ ]]; then
  echo "Error: Directory name should be in lowercase."
  exit 1
fi

if ! [[ $node_name =~ ^[A-Z][a-zA-Z]*$ ]]; then
  echo "Error: Node name should be in PascalCase."
  exit 1
fi

# Define the paths
src_directory="./src"
directory_path="$src_directory/$directory_name"
node_path="$directory_path/$node_name"

# Check if the directory already exists
if [ -d "$node_path" ]; then
  echo "Error: $node_name already exists in $directory_name"
  exit 1
fi

# Create the directory if it doesn't exist
if [ ! -d "$directory_path" ]; then
  mkdir -p "$directory_path"
fi

# Create the node directory and index.js file
mkdir "$node_path"
index_file="$node_path/index.jsx"
style_file="$node_path/style.module.css"

# Add the code to the index.jsx file
cat > "$index_file" << EOF
import React from "react"
import styles from "./style.module.css"

const $node_name = () => {
  return (
    <div>$node_name</div>
  )
}

export default $node_name
EOF

touch "$style_file"

echo "Successfully created $node_name in $directory_name"