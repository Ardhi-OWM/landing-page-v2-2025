import React from 'react';

const Imprint = () => {
    return (
        <div className="container mx-auto px-10 py-10">
            <h1 className="text-3xl font-bold mb-4">Imprint (Impressum)</h1>
            <h3 className="text-xl font-semibold mb-2">Information according to § 5 TMG</h3>

            <p className="mb-4 body-2">
                Ochwada, Wu, Masinde GbR, <br />
                Hugo-Cassirer-Str. 11, <br />
                13587 Berlin, <br />
                Germany
            </p>


            <h3 className="text-xl font-semibold mb-2">Represented by:</h3>
            <p className="mb-4 body-2">
                Linda Nakhulo Ochwada <br />
                Kai-Ti Wu <br />
                Caleb Juma Masinde
            </p>


            <h3 className="text-xl font-semibold mb-2">Contact Information:</h3>
            <p className="mb-4 body-2">
                Phone: <em>+49 [ ---]</em> <br />
                Email: <a href="mailto:info@ardhi.de" className="text-primary hover:underline">info@ardhi.de</a> <br />
                Website: <a href="https://ardhi.de/ " className='hover:underline text-blue-800 visited:text-purple-800'>https://ardhi.de/</a>
            </p>


            <h3 className="text-xl font-semibold mb-2">VAT Identification Number according to §27 a Umsatzsteuergesetz (VAT law):</h3>
            <p className="mb-4 body-2"> 19/459/01486 </p>

            <h4 className="text-xl font-semibold mb-2">Responsible for the content according to § 55 Abs. 2 RStV (State Broadcasting Treaty):</h4>
            <p className="mb-4">
                Ochwada, Wu, Masinde GbR, <br />
                Linda Nakhulo Ochwada <br />
                Hugo-Cassirer-Str. 11, <br />
                13587 Berlin, <br />
                Germany
            </p>

            {/* ---------------------------------------- */}
            <div className="w-2/3 mx-auto mb-5 h-[2px] bg-gradient-to-r from-transparent via-gray-800 to-transparent dark:via-white"></div>
            {/* ---------------------------------------- */}

            <h3 className="text-xl font-bold mb-2">Disclaimer</h3>
            <h4 className="text-xl mb-2">Liability for content</h4>
            <p className="mb-2 body-2">
                As a service provider, we are responsible for our own content on these pages according to § 7 Abs.1 TMG. However,
                according to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information
                or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information
                under general laws remain unaffected. Any liability in this regard, however, is only possible from the time we become aware
                of a specific infringement. Upon notification of such violations, we will remove the content immediately.
            </p>

            <h4 className="text-xl mb-2">Liability for links</h4>
            <p className="mb-2 body-2">
                Our website may contain links to external websites, over whose content we have no control. Therefore, we cannot assume any liability
                for these external contents. The respective provider or operator of the linked pages is always responsible for the content of those
                pages. The linked pages were checked for possible legal violations at the time of linking, and illegal content was not recognizable.
                However, ongoing monitoring of linked pages is unreasonable without specific indications of legal violations. If we become aware of any
                such violations, we will remove those links immediately.
            </p>

            <h4 className="text-xl mb-2">Copyright</h4>
            <p className="mb-2 body-2">
            The content and works on these pages created by the site operators are subject to German copyright law. The duplication, processing, 
            distribution, or any form of commercialization of such material beyond the scope of copyright law requires the prior written 
            consent of the respective author or creator. Downloads and copies of these pages are permitted solely for private, non-commercial use. Where 
            the content on this site was not created by the operator, the copyrights of third parties are respected, and such content is identified 
            accordingly. Should you become aware of any copyright infringement, please inform us. Upon notification of violations, we will remove such 
            content immediately.
            </p>


            {/* ---------------------------------------- */}
            <div className="w-2/3 mx-auto mb-5 h-[2px] bg-gradient-to-r from-transparent via-gray-800 to-transparent dark:via-white"></div>
            {/* ---------------------------------------- */}
            <h4 className="text-xl mb-2">Privacy Policy</h4>
            <p className="mb-2 body-2">
            For details about how we handle your data, please visit our <a href="/privacy_policy" className="text-primary hover:underline">  Privacy Policy</a>.
            </p>


        </div>
    );
};

export default Imprint;
