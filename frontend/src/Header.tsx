function Header(props: any) {
  return (
    <header className="header navbar navbar-dark bg-dark">
      <div>
        <h1 className="text-white text-center">{props.title}</h1>
      </div>
    </header>
  );
}

export default Header;
