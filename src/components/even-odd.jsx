export const EvenOdd = () => {
  const numbers = [1, 2, 3, 4, 5, , 6, 7];

  const isEven = (number) => {
    const isEven = number % 2 == 0;
    return isEven;
  };

  // const isEvenElement =(element)=>{

  //     if(isEven(element)){
  //         return <h2 style={{
  //             backgroundColor:"black",
  //             color:"white"
  //         }}   >{element} is a even number</h2>
  //     }else{
  //         return <h2  style={{
  //             backgroundColor:"white",
  //             color:"black"
  //         }} >{element} is a odd number</h2>
  //     }

  // }

  const isEvenElement = (element) => {
    return isEven(element) ? (
      <h2
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        {element} is a even number
      </h2>
    ) : (
      <h2
        style={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        {element} is a odd number
      </h2>
    );
  };

  return (
    <>
      <h1>Even or Odd component</h1>

      {numbers.map((eachNumber) => {
        return isEvenElement(eachNumber);
      })}
    </>
  );
};

export default EvenOdd;
