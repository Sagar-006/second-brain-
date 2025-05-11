interface InputProps{
    placeholder:string;
    ref: any
}
export const Input = ({ref,placeholder}:InputProps) =>{
    return (
      <div>
        <input
          ref={ref}
          placeholder={placeholder}
          type="text"
          required
          className="px-4 py-2 border rounded"
        />
      </div>
    );
}