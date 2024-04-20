function getElementsByTagName(element, tagNameParam) {
    const elements = [];
    const tagName = tagNameParam.toUpperCase();
  
    function traverse(el) {
      if (el == null) {
        return;
      }
  
      if (el.tagName === tagName) {
        elements.push(el);
      }
  
      for (const child of el.children) {
        traverse(child);
      }
    }
  
    for (const child of element.children) {
      traverse(child);
    }
  console.log(elements)
    return elements;
  }


// function getElementsByTagName(el, tagName) {    
//     const elements = []
//     const tagElName = tagName.toUpperCase()

//     function traverse(){
//         if(!el || el === null) return [];

//         if(el.tagName === tagElName){
//             elements.push(el)
//         }
//         for(const child of el.children){
//             traverse(child)
//         }
//     }
//     for (const child of el.children) {
//         traverse(child);
//       }
//     return elements;
// }