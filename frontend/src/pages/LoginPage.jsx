import {React, useState} from 'react'
import { useAuthStore } from '../store/useAuthStore'
import BorderAnimatedContainer from '../components/BorderAnimatedContainer'
import { MessageCircleIcon, LockIcon, MailIcon, UserIcon, LoaderIcon } from 'lucide-react'

function LoginPage() {
 const [formData, setFormData] = useState({  email: "", password: "" })
  const { login, isLoggingIn } = useAuthStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="relative w-full max-w-6xl md:h-[780px] h-[650px]">
        <BorderAnimatedContainer>
          <div className="w-full h-full flex flex-col md:flex-row bg-slate-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800/70 shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)]">
            
            {/* Left Section - Form Column */}
            <div className="md:w-1/2 p-10 flex items-center justify-center bg-gradient-to-br from-slate-900/60 to-slate-800/40 border-r border-slate-700/30">
              <div className="w-full max-w-md">
                {/* Form Header */}
                <div className="text-center mb-10">
                  <MessageCircleIcon className="w-16 h-16 mx-auto text-cyan-400 mb-4 animate-pulse drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]" />
                  <h2 className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] mb-2">
                    Create Account
                  </h2>
                  <p className="text-slate-400">Join us and get started today</p>
                </div>

                {/* Signup Form */}
                <form className="space-y-6 mt-6" onSubmit={handleSubmit}>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <div className="relative">
                      <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 hover:bg-slate-800/80 shadow-[0_0_10px_-2px_rgba(56,189,248,0.3)]"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                    <div className="relative">
                      <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 hover:bg-slate-800/80 shadow-[0_0_10px_-2px_rgba(56,189,248,0.3)]"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoggingIn}
                    className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-800 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)] hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.6)] disabled:cursor-not-allowed"
                  >
                    {isLoggingIn ? (
                      <>
                        <LoaderIcon className="w-5 h-5 animate-spin" />
                        <span>Logging In...</span>
                      </>
                    ) : (
                      <span>Login</span>
                    )}
                  </button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center">
                  <p className="text-slate-400 text-sm">
                    Don't have an account?{' '}
                    <a
                      href="/signup"
                      className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Create one here
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Welcome Text */}
            <div className="md:w-1/2 flex flex-col items-center justify-center p-10 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 text-center backdrop-blur-md">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                Welcome to Our Platform
              </h3>
              <p className="text-slate-300 max-w-sm mx-auto leading-relaxed">
                Sign up to access amazing features, connect with others, and start your journey with us.
              </p>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  )
}

export default LoginPage