export default function WriteBlogForm({ user }) {
  console.log(user);
  return (
    <>
      <h1>Write Blog Form</h1>
      <h1>{user.email}</h1>
      <h1>{user.userName}</h1>
    </>
  );
}
