import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useAppDispatch, useAppSelector } from './Redux/ReduxWithTS/hooks';
import { Note, addNote, noteSelector } from './Redux/ReduxWithTS/notesSlice';

const Notes:React.FC = () => {
    
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const dispatch=useAppDispatch()
  const notes=useAppSelector(noteSelector)
  console.log(notes)

  return (
    <View>
      <TextInput
        placeholder="Enter Your note"
        style={styles.input}
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <TextInput
        placeholder="Enter YOur Note description"
        style={styles.input}
        onChangeText={text => setDesc(text)}
        value={desc}
      />
      <TouchableOpacity style={styles.button} onPress={title.length || desc.length ?()=>{dispatch(addNote({title,desc}));setTitle('');setDesc('')}:()=>{}}>
        <Text style={{color:'white'}}>Add Note</Text>
      </TouchableOpacity>
      

      <FlatList data={notes} renderItem={({item}:{item:Note})=>{
        return(
            <View style= {styles.noteList}>
                <Text style={styles.head}>{item.title}</Text>
                <Text>{item.desc}</Text>

            </View>

        )
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  head:{
    fontSize:20,
fontWeight:'400',
color:'blue'

  },
    noteList:{
width:'90%',
height:60,
alignSelf:'center',
borderWidth:1,
paddingLeft:20,
marginTop:20,

    },
    button:{
width:'90%',
height:50,
borderWidth:1,
alignSelf:'center',
backgroundColor:'black',
marginTop:20,
alignItems:'center',
justifyContent:'center',
elevation:50

    },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 20,
  },
});

export default Notes;
