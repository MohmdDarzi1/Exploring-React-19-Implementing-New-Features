import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
     
      <header style={{ backgroundColor: "#282c34", padding: "10px 20px" }}>
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              listStyle: "none",
              padding: 0,
              margin: 0,
              gap: "20px",
            }}
          >
            <li>
              <Link
                to="/message"
                style={{
                  color: "#61dafb",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#fff")}
                onMouseOut={(e) => (e.target.style.color = "#61dafb")}
              >
                Message Card
              </Link>
            </li>
            <li>
              <Link
                to="/add-product"
                style={{
                  color: "#61dafb",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#fff")}
                onMouseOut={(e) => (e.target.style.color = "#61dafb")}
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link
                to="/theme"
                style={{
                  color: "#61dafb",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#fff")}
                onMouseOut={(e) => (e.target.style.color = "#61dafb")}
              >
                Theme
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                style={{
                  color: "#61dafb",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#fff")}
                onMouseOut={(e) => (e.target.style.color = "#61dafb")}
              >
                Post List
              </Link>
            </li>
          </ul>
        </nav>
      </header>


      <footer
        style={{
          backgroundColor: "#282c34",
          color: "#fff",
          textAlign: "center",
          padding: "10px 20px",
          position: "relative",
          bottom: 0,
          width: "100%",
        }}
      >
            <a href="https://www.linkedin.com/in/mohammad-darzi/">
            linkedin
            </a>
      </footer>
    </div>
  );
};

export default Layout;
