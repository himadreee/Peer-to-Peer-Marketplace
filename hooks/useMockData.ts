import { useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Product, User } from '@/types';

export function useMockData() {
  const { state, dispatch } = useApp();

  useEffect(() => {
    // Don't generate mock data until user is initialized
    if (!state.user) {
      return;
    }

    // Mock sellers
    const mockSellers: User[] = [
      {
        id: '2',
        name: 'Emma Chen',
        email: 'emma@example.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        isSeller: true,
        rating: 4.9,
        reviewCount: 89,
        joinedDate: '2022-11-20',
        bio: 'Creating beautiful ceramic pieces',
        location: 'San Francisco, CA',
      },
      {
        id: '3',
        name: 'Michael Santos',
        email: 'michael@example.com',
        avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        isSeller: true,
        rating: 4.7,
        reviewCount: 156,
        joinedDate: '2022-08-10',
        bio: 'Handcrafted wooden furniture and decor',
        location: 'Austin, TX',
      },
    ];

    // Mock products
    const mockProducts: Product[] = [
      {
        id: '1',
        title: 'Handwoven Macrame Wall Hanging',
        description: 'Beautiful bohemian-style macrame wall hanging made with natural cotton cord. Perfect for adding texture and warmth to any space.',
        price: 85.00,
        images: [
          'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
          'https://images.pexels.com/photos/6585765/pexels-photo-6585765.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        ],
        category: 'Home & Living',
        tags: ['macrame', 'wall art', 'bohemian', 'handmade'],
        sellerId: '2',
        seller: mockSellers[0],
        stock: 12,
        rating: 4.8,
        reviewCount: 24,
        createdAt: '2024-01-15',
        isActive: true,
      },
      {
        id: '2',
        title: 'Sterling Silver Moon Phase Necklace',
        description: 'Delicate sterling silver necklace featuring moon phases. Each piece is handcrafted with attention to detail.',
        price: 125.00,
        images: [
          'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        ],
        category: 'Jewelry',
        tags: ['silver', 'moon', 'necklace', 'handmade'],
        sellerId: '1',
        seller: state.user!,
        stock: 8,
        rating: 4.9,
        reviewCount: 31,
        createdAt: '2024-01-10',
        isActive: true,
      },
      {
        id: '3',
        title: 'Ceramic Coffee Mug Set',
        description: 'Set of 2 handthrown ceramic coffee mugs with unique glazing. Perfect for your morning coffee ritual.',
        price: 65.00,
        images: [
          'https://images.pexels.com/photos/6954078/pexels-photo-6954078.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        ],
        category: 'Home & Living',
        tags: ['ceramic', 'mug', 'coffee', 'pottery'],
        sellerId: '2',
        seller: mockSellers[0],
        stock: 15,
        rating: 4.7,
        reviewCount: 18,
        createdAt: '2024-01-12',
        isActive: true,
      },
      {
        id: '4',
        title: 'Reclaimed Wood Phone Stand',
        description: 'Eco-friendly phone stand made from reclaimed oak wood. Features a minimalist design that complements any desk setup.',
        price: 35.00,
        images: [
          'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        ],
        category: 'Electronics',
        tags: ['wood', 'phone stand', 'eco-friendly', 'minimalist'],
        sellerId: '3',
        seller: mockSellers[1],
        stock: 25,
        rating: 4.6,
        reviewCount: 42,
        createdAt: '2024-01-08',
        isActive: true,
      },
      {
        id: '5',
        title: 'Hand-knitted Alpaca Wool Scarf',
        description: 'Luxuriously soft scarf hand-knitted from 100% alpaca wool. Available in multiple colors and perfect for cold weather.',
        price: 95.00,
        images: [
          'https://images.pexels.com/photos/7002763/pexels-photo-7002763.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        ],
        category: 'Clothing',
        tags: ['alpaca wool', 'scarf', 'hand-knitted', 'winter'],
        sellerId: '1',
        seller: state.user!,
        stock: 6,
        rating: 5.0,
        reviewCount: 15,
        createdAt: '2024-01-05',
        isActive: true,
      },
      {
        id: '6',
        title: 'Watercolor Botanical Print Set',
        description: 'Set of 3 original watercolor botanical prints. Professionally printed on high-quality paper and ready to frame.',
        price: 75.00,
        images: [
          'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        ],
        category: 'Art & Collectibles',
        tags: ['watercolor', 'botanical', 'prints', 'art'],
        sellerId: '2',
        seller: mockSellers[0],
        stock: 20,
        rating: 4.8,
        reviewCount: 27,
        createdAt: '2024-01-03',
        isActive: true,
      },
    ];

    dispatch({ type: 'SET_PRODUCTS', payload: mockProducts });
  }, [state.user, dispatch]);

  return { products: state.products };
}