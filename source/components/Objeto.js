import * as React from 'react';
import * as RN from 'react-native';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {AntDesign} from '@expo/vector-icons';
import { baseDatos } from '../config/firebase';

export default function Objeto({
  id,
  imagen,
  nombre,
  descripcion,
  precio,
  vendido,
}) {

  const editar = () => {
    const docRef = doc(baseDatos, 'objetos', id);
    updateDoc(docRef, {
        vendido: true,
    });
  };

  const eliminar = () => {
    const docRef = doc(baseDatos, 'objetos', id);
    deleteDoc(docRef);
  };

  return(
    <RN.View style={styles.objetoContainer}>
      <RN.View style={styles.conEliminar}>
        <RN.Text style={styles.imagen}>{imagen}</RN.Text>
        <AntDesign onPress={eliminar} name='delete' size={20} color="#f194ff"/>            
      </RN.View>      
      <RN.Text style={styles.nombre}>{nombre}</RN.Text>
      <RN.Text style={styles.descripcion}>{descripcion}</RN.Text>
      <RN.Text style={styles.precio}>${precio}</RN.Text>
      {vendido ? (
        <RN.TouchableOpacity style={styles.button}>
          <RN.Text style={styles.button}>Cargado</RN.Text>
        </RN.TouchableOpacity>
      ) : (
        <RN.TouchableOpacity 
          style={styles.button}
          onPress={editar}>
          <RN.Text style={styles.button}>Cargar</RN.Text>
        </RN.TouchableOpacity>
      )}      
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  objetoContainer: {
    flex: 1,
    backgroundColor: '#fff0f5',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'Courier New',
     alignItems: 'center',
  },
  descripcion: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'Courier New',
    alignItems: 'center',
  },
  imagen:{
    fontSize:60,
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    fontFamily: 'Courier New',
    
  },
  conEliminar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },
  button:{
    color: "#f194ff",
    borderWidth:0.5,
    borderRadius: 8,  
    marginVertical: 2,
    fontFamily: 'Courier New',
    fontWeight:'500'
  },
});