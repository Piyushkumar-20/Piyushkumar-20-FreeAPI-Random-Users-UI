function AvatarCard({ avatar, level = "Rookie" }) {
  return (
    <article>
      <div>{avatar.code}</div>
      <h2>{avatar.name}</h2>
      <p>{level}</p>
    </article>
  );
}

export default AvatarCard