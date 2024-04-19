export const fetchMedicineData = async (userId) => {
  try {
    const res = await fetch(
      `https://healthcare-2fif.onrender.com/medicine/${userId}`
    );
    console.log(res)
    if (!res.ok) {
      throw new Error("Network response is not okay");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch data : ", error);
    throw error;
  }
};
