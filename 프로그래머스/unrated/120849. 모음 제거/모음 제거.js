function solution(my_string) {
  const vowels = ["a", "e", "i", "o", "u"];
    
  vowels.forEach((char, index) => {
    my_string = my_string.replaceAll(char, '')
  }) 
  
  return my_string;
}