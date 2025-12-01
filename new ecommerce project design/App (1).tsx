import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { ProductGrid } from './components/ProductGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      {/* Top Navigation */}
      <TopNav />
      
      {/* Main Layout */}
      <div className="flex">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-8 ml-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-slate-900 mb-1">Products</h1>
                <p className="text-slate-500">Manage your product catalog and inventory</p>
              </div>
              <div className="text-slate-500">
                Showing <span className="text-slate-900">1-9</span> of <span className="text-slate-900">142</span>
              </div>
            </div>
            
            <ProductGrid />
          </div>
        </main>
      </div>
    </div>
  );
}