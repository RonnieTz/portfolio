type Props = { logo: string; isExpanded: boolean };
const ArrowDown = ({ logo, isExpanded }: Props) => {
  return (
    <div className="sidebar-item-arrow">
      <img
        style={{
          rotate: isExpanded ? '180deg' : undefined,
          transition: '0.2s',
        }}
        height={'60%'}
        width={'60%'}
        src={logo}
        alt="Arrow down"
      />
    </div>
  );
};
export default ArrowDown;
