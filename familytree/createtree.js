var tree = document.getElementById('tree');

function createTree(tree, obj) {
      tree.innerHTML = createTreeText(obj)
}

function createTreeText(obj) {
    var leaf = '';
    for (var key in obj) {
        leaf += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (leaf) {
        var branch = '<ul>' + leaf + '</ul>'
    }
    return branch || '';
}

createTree(tree, data);
