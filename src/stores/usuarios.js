import { defineStore } from 'pinia'
import { ref } from 'vue'
import { $db } from '@/firebaseApp'
import { collection, onSnapshot, addDoc, doc, deleteDoc } from 'firebase/firestore'

export const useUsuariosStore = defineStore('usuarios', () => {
  const usuarios = ref([])
  const usuariosRef = collection($db, 'usuarios')

  async function fetchUsuarios() {
    try {
      onSnapshot(usuariosRef, (snapshot) => {
        usuarios.value = snapshot.docs.map((doc) => {
          console.log(doc.data())
          return { id: doc.id, ...doc.data() };
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function addUsuario(data) {
    try {
      await addDoc(usuariosRef, data)
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteUsuario(id) {
    try {
      const usuarioRef = doc($db, 'usuarios', id)

      await deleteDoc(usuarioRef)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    usuarios,
    fetchUsuarios,
    addUsuario,
    deleteUsuario
  }
})
