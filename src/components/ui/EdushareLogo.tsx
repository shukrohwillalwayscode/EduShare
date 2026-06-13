type LogoProps={
    logoImg:string,
    logoText1:string,
    logoText2:string,
}
const EdushareLogo = ({logoImg,logoText1,logoText2}:LogoProps) => {
  return (
    <div>
    <section className="flex text-center  gap-3.5 items-center">
        <img src={logoImg} alt="Edushare Logo" />
        <div className="flex">
          <p className="text-[#477491] text-[22px] font-bold">{logoText1}</p>
          <p className="text-[#CA9C72] text-[22px] font-bold">{logoText2}</p>
        </div>
      </section>
    
    </div>
  )
}

export default EdushareLogo