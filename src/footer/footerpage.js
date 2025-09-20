import "./footerpage.css";

function FooterPage() {
    return(
        <div className="footer">
            <h6>Questions? Call : <a href="">000-800-919-1694</a></h6>

            <div className="row">
                <div className="col">
                    <div className="mb-2"><a href="https://help.netflix.com/en/node/412" target="_blank">FAQ</a></div>
                    <div className="mb-2"><a href="https://media.netflix.com/en/" target="_blank">Media Centre</a></div>
                    <div className="mb-2"><a href="https://devices.netflix.com/en/" target="_blank">Ways to Watch</a></div>
                    <div className="mb-2"><a href="https://fast.com/" target="_blank">Speed Test</a></div>
                </div>

                <div className="col">
                    <div className="mb-2"><a href="https://help.netflix.com/en/" target="_blank">Help Centre</a></div>
                    <div className="mb-2"><a href="https://ir.netflix.net/ir-overview/profile/default.aspx" target="_blank">Investor Relations</a></div>
                    <div className="mb-2"><a href="https://help.netflix.com/legal/termsofuse" target="_blank">Terms of Use</a></div>
                    <div className="mb-2"><a href="https://help.netflix.com/legal/corpinfo" target="_blank">Corporate Information</a></div>
                    <div className="mb-2"><a href="https://help.netflix.com/legal/notices" target="_blank">Legal Notices</a></div>
                </div>

                <div className="col">
                    <div className="mb-2"><a href="http://localhost:3001/login" target="_blank">Account</a></div>
                    <div className="mb-2"><a href="https://jobs.netflix.com/" target="_blank">Jobs</a></div>
                    <div className="mb-2"><a href="https://help.netflix.com/legal/privacy" target="_blank">Privacy</a></div>
                    <div className="mb-2"><a href="https://help.netflix.com/en/contactus" target="_blank">Contact Us</a></div>
                    <div className="mb-2"><a href="https://www.netflix.com/in/browse/genre/839338" target="_blank">Only on Netflix</a></div>
                </div>

            </div>
        </div>

        
    )
    
}
export default FooterPage;