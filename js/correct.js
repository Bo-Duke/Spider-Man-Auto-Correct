var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);
while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue
    .replace(/spiderman/g, 'Spider-Man')
    .replace(/Spiderman/g, 'Spider-Man')
    .replace(/SPIDERMAN/g, 'SPIDER-MAN')
    .replace(/SpiderMan/g, 'Spider-Man');
}
