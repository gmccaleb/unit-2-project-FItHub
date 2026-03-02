function Footer() {
  let thisYear = new Date().getFullYear();

  return (
    <footer>
      <div>&copy; {thisYear} FitHub - Gabrielle McCaleb</div>
    </footer>
  );
}

export default Footer;
