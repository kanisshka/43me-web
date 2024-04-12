import axios from 'axios';

export const TaskList = async (authToken, data) => {
  try {
    // console.log(authToken,data,'data')
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP}list`, {
      params: data,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    //  console.log(response,'respon')
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const EditTask = async (authToken, id, data) => {
  try {
    console.log(authToken,data,'data')
    const response = await axios.put(`${process.env.NEXT_PUBLIC_APP}task/${id}`, data ,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(response, 'editTask');
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const MoveTask = async (authToken, id, data) => {
  try {
    // console.log(authToken,data,'data')
    const response = await axios.put(`${process.env.NEXT_PUBLIC_APP}task-move/${id}`, data ,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(response, 'moveTask');
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const MarkAsDone = async (authToken, id, data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_APP}task-done/${id}`, data ,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(response, 'MarkAsDone');
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const AddNewTask = async (authToken,data) => {
  try {
    console.log(authToken,data,'data')
    const response = await axios.post(`${process.env.NEXT_PUBLIC_APP}task`, data ,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(response, 'AddTask');
    return response;
  } catch (error) {
    console.log(error);
  }
};