export default function PtnkInformation() {
  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      <div className="h-24 aspect-square bg-contain bg-center bg-no-repeat bg-[url('/ptnk-logo.jpg')]" />
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-xl font-bold text-left">Đại học Quốc gia Thành phố Hồ Chí Minh</h1>
        <p className="text-lg text-left">Trường Phổ thông Năng khiếu</p>
      </div>
    </div>
  )
}
