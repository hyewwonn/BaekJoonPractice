function solution(sizes) {
    var w = 0
    var h = 0;
    sizes.map((size) => {
        if(size[0] > size[1]){
            w = w < size[0] ? size[0] : w;
            h = h < size[1] ? size[1] : h;
        }
        else {
            w = w < size[1] ? size[1] : w;
            h = h < size[0] ? size[0] : h;
        }
    })
    return w*h;
}