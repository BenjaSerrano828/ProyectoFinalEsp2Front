<script setup>
const props = defineProps({
    name:{
    type:String,
  },
  email:{
    type:String,
  },
  address:{
    type:String,
  },
  rut:{
    type:String,
  },
  phone:{
    type:String,
  },

})
const handleDeleteUser = async () => {
 
  const confirmDelete = window.confirm(
    "¿Are you sure you want to delete this Borrow?"
  );
  if (!confirmDelete) {
    return;
  }
  try {
    const response = await axios.delete(
      `http://localhost:8080/corazondelatorback/deleteBorrow/${props.borrow.id}`
    );
    console.log(response.data); // Muestra el mensaje de eliminación (por ejemplo, "Comic eliminado")
    // Puedes actualizar la lista de libros después de la eliminación si es necesario
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>

 
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{{ props.name }}</td>
      <td>{{ props.rut }}</td>
      <td>{{ props.address }}</td>
      <td>{{props.email}}</td>
      <td>{{ props.phone }}</td>
      <td><button type="button" class="btn btn-danger" @click="handleDeleteUser">Delete</button>
        <RouterLink to="/editProfilePage">
            <button type="button" class="btn btn-warning editButton">Edit</button>
        </RouterLink>
    </td>
    </tr>
  </tbody>
</template>

<style>
.editButton{
    margin-left: 10px;
}
</style>