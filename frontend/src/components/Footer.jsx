import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-sky-50 text-[#0f172a] py-12 px-6 relative z-10 border-t border-slate-200 font-medium">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 items-start">
          
          {/* Column 1: Brand & Info */}
          <div className="space-y-8 min-w-max">
            <Link to="/" className="inline-block">
              <img 
                src="/logo.png" 
                alt="Vimala Eye Hospital" 
                className="h-36 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-base group">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:vimalaeyehospital@gmail.com" className="hover:text-primary transition-colors truncate">
                  vimalaeyehospital@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3 text-base">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Mon - Sat: 9am–2pm & 5pm–9pm<br/>
                  <span className="text-[#0f172a]/60 font-bold">Sun: Closed</span>
                </p>
              </div>

            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[#0f172a] text-lg font-bold uppercase tracking-widest border-b border-slate-200 pb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {["Home", "Services", "Doctors", "Eye Health Guide"].map((item) => (
                <Link 
                  key={item}
                  to={item === "Home" ? "/" : item === "Eye Health Guide" ? "/guide" : `/${item.toLowerCase()}`}
                  className="flex items-center hover:text-primary transition-all duration-300 group text-base"
                >
                  <ChevronRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Bhiwandi Locations */}
          <div className="space-y-6">
            <h3 className="text-[#0f172a] text-lg font-bold uppercase tracking-widest border-b border-slate-200 pb-4">
              Bhiwandi Clinics
            </h3>
            <div className="space-y-6">
              {/* Main Hospital */}
              <div className="space-y-2">
                <h4 className="text-primary font-bold text-sm uppercase">Main Hospital</h4>
                <p className="text-sm leading-relaxed text-[#0f172a]/80">
                  1st Floor Sunshine Plaza, Dhamankar Naka, Near Fire Brigade, Bhiwandi - 421302
                </p>
                <div className="flex items-center space-x-2 text-[#0f172a] text-sm font-bold">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:9112210081" className="hover:text-primary">9112210081</a>
                </div>
              </div>

              {/* Gaibinagar */}
              <div className="space-y-2">
                <h4 className="text-primary font-bold text-sm uppercase">Gaibinagar</h4>
                <p className="text-sm leading-relaxed text-[#0f172a]/80">
                  1st Floor, Beside Safina Opticals, Near Auliya Masjid, Opp Dr Sanaullah, Gaibi Nagar, Bhiwandi - 421302
                </p>
                <div className="flex items-center space-x-2 text-[#0f172a] text-sm font-bold">
                  <Phone className="w-4 h-4 text-primary" />
                  <div className="space-x-2">
                    <a href="tel:7757038100" className="hover:text-primary">7757038100</a>
                    <span>|</span>
                    <a href="tel:9075584916" className="hover:text-primary">9075584916</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Wada Location */}
          <div className="space-y-6">
            <h3 className="text-[#0f172a] text-lg font-bold uppercase tracking-widest border-b border-slate-200 pb-4">
              Wada Clinic
            </h3>
            <div className="space-y-2">
              <h4 className="text-primary font-bold text-sm uppercase">Wada Branch</h4>
              <p className="text-sm leading-relaxed text-[#0f172a]/80">
                1st Floor, Thakarshi Complex, Opp. Kailash Talkies, Wada - 421303
              </p>
              <div className="flex items-center space-x-2 text-[#0f172a] text-sm font-bold">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:9168987108" className="hover:text-primary">9168987108</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex justify-center text-[10px] uppercase tracking-[0.2em] text-[#0f172a]/60 font-bold">
          <p>© {new Date().getFullYear()} Vimala Eye Hospital. Premium Vision Care.</p>
        </div>
      </div>
    </footer>
  );
}
