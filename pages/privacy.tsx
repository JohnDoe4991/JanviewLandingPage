import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures it takes the full height of the viewport
        backgroundColor: "#f9f9f9", // Matches the rest of the page styling
        padding: "2rem",
      }}
    >
      <Link href="/" passHref>
        <button
          style={{
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textTransform: "uppercase",
            transition: "background-color 0.3s ease",
            marginBottom: "2rem", // Space between button and main content
          }}
          onMouseOver={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "#007bff")}

        >
          🏠 Home
        </button>
      </Link>
      <main
        style={{
          padding: "2rem",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.8",
          color: "#333",
          backgroundColor: "#fff", // Contrast with the background
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            textAlign: "center",
            color: "#444",
            textTransform: "uppercase",
            borderBottom: "2px solid #007bff",
            paddingBottom: "0.5rem",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
          This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally
          Identifiable Information’ (PII) is being used online. PII, as described in US privacy law and information
          security, is information that can be used on its own or with other information to identify, contact, or
          locate a single person, or to identify an individual in context. Please read our privacy policy carefully to
          get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable
          Information in accordance with our website.
        </p>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#007bff" }}>
          What personal information do we collect?
        </h2>
        <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
          - When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address,
          mailing address, phone number, Company Name or other details to help you with your experience.
        </p>
        <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
          We collect information from you when you fill out a form or enter information on our site.
        </p>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#007bff" }}>
          How do we use your information?
        </h2>
        <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
          We may use the information we collect from you when you register, make a purchase, sign up for our newsletter,
          respond to a survey or marketing communication, surf the website, or use certain other site features in the
          following ways:
        </p>
        <ul
          style={{
            marginLeft: "1.5rem",
            marginBottom: "1.5rem",
            listStyleType: "disc",
            color: "#444",
          }}
        >
          <li>To follow up with them after correspondence (live chat, email or phone inquiries).</li>
        </ul>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#007bff" }}>
          How do we protect your information?
        </h2>
        <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
          Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your
          visit to our site as safe as possible.
        </p>
        <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
          Your personal information is contained behind secured networks and is only accessible by a limited number of
          persons who have special access rights to such systems and are required to keep the information confidential.
          In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL)
          technology.
        </p>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#007bff" }}>Do we use cookies?</h2>
        <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
          Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive
          through your Web browser (if you allow) that enables the site’s or service provider’s systems to recognize
          your browser and capture and remember certain information.
        </p>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#007bff" }}>Third-party disclosure</h2>
        <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information
          unless we provide users with advance notice.
        </p>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#007bff" }}>Google Advertising</h2>
        <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
          Google’s advertising requirements can be summed up by Google’s Advertising Principles. They are put in place
          to provide a positive experience for users. For more details, see Google’s advertising policies at{" "}
          <a
            href="https://support.google.com/adwordspolicy/answer/1316548?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "underline" }}
          >
            this link
          </a>
          .
        </p>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#007bff" }}>Contacting Us</h2>
        <p style={{ textAlign: "justify", marginBottom: "1rem" }}>
          If there are any questions regarding this privacy policy, you may contact us using the information below.
        </p>
        <p style={{ fontWeight: "bold", marginTop: "1rem", color: "#444" }}>JWare Services LLC</p>
        <p style={{ color: "#555" }}>United States</p>
        <p style={{ color: "#555" }}>info@jwareservices.com</p>
        <p style={{ color: "#555" }}>+1 (704) 516-3617</p>
        <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#888" }}>Last Edited on 2024-12-04</p>
      </main>
    </div>
  );
}
