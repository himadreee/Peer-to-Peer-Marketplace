import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-teal-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-emerald-700 border border-emerald-200">
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <span>Trusted by 10,000+ artisans worldwide</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Unique
                <span className="text-emerald-600 block">Handmade Treasures</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Support independent artisans and find one-of-a-kind handcrafted goods 
                that tell a story and bring warmth to your life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/products">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto">
                  Start Shopping
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/seller/register">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Become a Seller
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">5K+</div>
                <div className="text-sm text-gray-600">Artisan Sellers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">100K+</div>
                <div className="text-sm text-gray-600">Unique Products</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6954078/pexels-photo-6954078.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1"
                alt="Handmade pottery"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">4.9/5 Rating</div>
                  <div className="text-xs text-gray-500">Based on 2.5K reviews</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-amber-600">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Secure Payments</div>
                  <div className="text-xs text-gray-500">Protected transactions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}