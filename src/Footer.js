const Footer = () => {
    const handleClick = () => {
        window.location.href = 'mailto:wfields1@knights.ucf.edu'; // creates a popup for user to email suggestions
      };
    return (  
        <footer className="footer">
            <button onClick={handleClick}>Contact</button>
            <p>Copyright © {new Date().getFullYear()} SwiftVisions</p>
        </footer> 
    );
}
 
export default Footer;