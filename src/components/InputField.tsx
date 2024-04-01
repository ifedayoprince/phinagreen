import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export const InputField = (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (<div className="form-field input-field">
    <label className="form-label text-xs">{props.title}</label>
    <input {...props} className="input text-sm max-w-full" />
  </div>)
}