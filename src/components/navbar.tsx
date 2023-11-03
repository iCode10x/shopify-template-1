import Link from 'next/link'
import NavItems from './navItems'
import NavSearch from './navSearch'
import ProfileButton from './profileButton'
import WishListButton from './wishListButton'
import CartButton from './cartButton'
const Navbar = () => {
  return (
    <nav className="px-[40px] 2xl:px-[100px] py-[14px] flex justify-between items-center border border-red-500">
      <Link href="/">
        <h1 className="text-[36px] font-medium">Clostich</h1>
      </Link>
      <div>
        <NavItems />
      </div>
      <div className="flex items-center gap-[18px]">
        <NavSearch />
        <ProfileButton />
        <WishListButton />
        <CartButton />
      </div>
    </nav>
  )
}

export default Navbar
