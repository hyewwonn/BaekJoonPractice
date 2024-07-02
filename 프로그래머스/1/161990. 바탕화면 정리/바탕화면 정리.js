function solution(wallpaper) {
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                if (i < minX) minX = i;
                if (j < minY) minY = j;
                if (i > maxX) maxX = i;
                if (j > maxY) maxY = j;
            }
        }
    }
    
    let lux = minX, luy = minY, rdx = maxX + 1, rdy = maxY + 1;
    
    return [lux, luy, rdx, rdy];
}