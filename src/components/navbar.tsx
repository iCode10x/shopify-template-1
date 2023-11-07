import Link from 'next/link'
import NavItems from './navItems'
import NavSearch from './navSearch'
import ProfileButton from './profileButton'
import WishListButton from './wishListButton'
import CartButton from './cartButton'
import MobileNav from './mobileNav'
const Navbar = () => {
  return (
    <div className="lg:px-[40px] 2xl:px-[100px] py-[6px] flex justify-between items-center sticky top-0 z-50 bg-white">
      <div className="flex items-center gap-3">
        <div className="lg:hidden pl-3">
          <MobileNav />
        </div>
        <Link href="/">
          <h1 className="text-[36px] font-medium">Clostich</h1>
        </Link>
      </div>
      <div className="hidden lg:block">
        <NavItems />
      </div>
      <div className="flex items-center gap-[18px] max-sm:pr-4">
        <NavSearch />
        <ProfileButton />
        <WishListButton />
        <CartButton />
      </div>
    </div>
  )
}

export default Navbar
