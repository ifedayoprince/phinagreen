import React, { DetailedHTMLProps, forwardRef,InputHTMLAttributes } from "react"

export const InputField = forwardRef((
    props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    ref
  ) => <div className="form-field input-field">
  <label className="form-label text-xs">{props.title}</label>
  <input className="input text-sm max-w-full" {...props} ref={ref as never} />
</div>)