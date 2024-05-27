export default function LoginInput() {
    return (
        <div className="flex flex-col  items-start">
        <label className="pl-3 text-textColor text-[16px] font-medium font-Roboto">
            Email
        </label>
        <input
            className="bg-emailButton rounded-[12px] w-[482px] p-3 placeholder:text-textColor text-black font-normal font-Roboto "
            type="email"
            placeholder="xyz@gmail.com"
            required
        />
    </div>
    )
}