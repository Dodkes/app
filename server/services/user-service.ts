const mockUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

export async function usersGetAll() {
  try {
    return mockUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Could not fetch users");
  }
}
