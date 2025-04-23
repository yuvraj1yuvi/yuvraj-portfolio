import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="py-12 bg-[#111439]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-[#FF9E00]/10 rounded-lg mb-4">
                <FiMail className="w-6 h-6 text-[#FF9E00]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:yuvraj15052001@gmail.com"
                className="text-white/80 hover:text-[#FF9E00] transition-colors"
              >
                yuvraj15052001@gmail.com
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-[#FF9E00]/10 rounded-lg mb-4">
                <FiMapPin className="w-6 h-6 text-[#FF9E00]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-white/80">Kanpur, Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-[#FF9E00]/10 rounded-lg mb-4">
                <FiPhone className="w-6 h-6 text-[#FF9E00]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a
                href="tel:+919876543210"
                className="text-white/80 hover:text-[#FF9E00] transition-colors"
              >
                +91 9876543210
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-white/60">
          <p>© {new Date().getFullYear()} Yuvraj Pal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
