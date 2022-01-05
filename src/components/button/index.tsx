export interface PropsType {
    /**
     * 内容
     */
    text?: string;
    /**
     * 样式类型
     */
    type?: "primary" | "warn" | "default";
    /**
     * 大小
     */
    size?: "default" | "mini" | "large";
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 加载中
     */
    loading?: boolean;
  
    /**
     * 用于 form 类型
     */
    formType?: "button" | "submit" | "reset";
    contentSlot?: string;
    [key: string]: any;
  }
  

const Button = ({
    text = '按钮',
    size = 'default',
    type = 'primary',
    contentSlot,
    formType,
    loading = false,
    disabled = false,
    className,
    style,
    id,
  }: PropsType) => {
      const cls = '';
      const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          console.log(e)
      }
    return (
        <button
          className={cls}
          disabled={disabled}
          type={formType}
          style={style}
          id={id}
          onClick={onClick}
        >
        {loading && (
          <span className='weui-btn_loading'>
            <i className='weui-loading' />
          </span>
        )}
        {text ? text : contentSlot}
      </button>
    );
  }
  
  export default Button;