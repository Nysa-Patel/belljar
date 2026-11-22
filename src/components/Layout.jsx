import { NavLink, Link } from "react-router-dom";
import CONTENT from "../content";

function SourcesList({ ids }) {
  const entries = (ids || [])
    .map((id) => CONTENT.worksCited.entries.find((e) => e.id === id))
    .filter(Boolean);

  if (entries.length === 0) {
    return (
      <div className="footer-sources">
        <Link to="/works-cited">{CONTENT.footer.worksCitedLinkLabel}</Link>
      </div>
    );
  }
  return (
    <div className="footer-sources">
      <strong>{CONTENT.footer.sourcesHeading}:</strong>{" "}
      <ul>
        {entries.map((e) => (
          <li key={e.id}>{e.mla.split(".")[0]}.</li>
        ))}
      </ul>{" "}
      — <Link to="/works-cited">{CONTENT.footer.worksCitedLinkLabel}</Link>
    </div>
  );
}

export default function Layout({ children, sources = [], mainClassName = "" }) {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary">
          <Link className="brand" to="/" state={{ scrollTo: "enter" }}>{CONTENT.site.title}</Link>
          <ul>
            {CONTENT.site.nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === "/"}
                  state={item.href === "/" ? { scrollTo: "enter" } : undefined}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={mainClassName}>{children}</main>

      <footer className="site-footer">
        <div className="footer-inner">
          <SourcesList ids={sources} />
          <div className="footer-support">
            <Link to="/support">&#9671; {CONTENT.footer.supportLinkLabel}</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
