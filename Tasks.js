// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const Task = () => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleAccordion = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <View>
//       <TouchableOpacity onPress={toggleAccordion}>
//         <Text><Image source={require('./assets/favicon.png')}></Image></Text>
//       </TouchableOpacity>
//       {expanded && (
//         <View>
//           <Text>Содержимое аккордеона</Text>
//         </View>
//       )}
//         <Text>Домашний экран</Text>
//       <Button
//         title="Перейти на экран О нас"
//         onPress={() => navigation.navigate('App')}
//       />
//     </View>
//   );
// };

// export default Task;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Task = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View>

{/* <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('App')}>
          <Text>Go to Back</Text>
        </TouchableOpacity> */}
      <TouchableOpacity onPress={toggleAccordion}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Click to expand/collapse
        </Text>
      </TouchableOpacity>
      {expanded && (
        <View style={{ backgroundColor: 'lightgrey', padding: 10 }}>
          <Text>Accordion content goes here</Text>
        </View>
      )}
    </View>
  );
};

export default Task;

