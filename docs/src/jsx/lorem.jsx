/**
 * @param {Object} props
 * @param {number} props.count
 */
export const Lorem = (props) => {
  return Array(props.count)
    .fill(0)
    .map((_, idx) => (
      <p key={idx}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque obcaecati
        nihil praesentium ducimus aliquid veniam et repudiandae qui quia tempore
        in eaque expedita rerum culpa dicta dolorem pariatur, ut veritatis.
      </p>
    ));
};
