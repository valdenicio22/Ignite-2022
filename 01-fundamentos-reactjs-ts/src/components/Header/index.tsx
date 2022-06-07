import RocketIcon from '../../assets/rocket.svg'

export const Header = () => {
  return (
    <header className="bg-black w-full h-52 flex items-center justify-center">
      <div className="flex items-center justify-center gap-3">
        <img src={RocketIcon} alt="rocket icon" />
        <p>
          <span className="text-4xl text-[#4EA8DE] ">to</span>
          <span className="text-4xl text-[#5E60CE] ">do</span>
        </p>
      </div>
    </header>
  )
}
