const ErrorMessage = ({ foodItemsListProp }) => {
  return (
    <>
      {foodItemsListProp.length === 0 ? (
        <h3>There is no healty Item!!</h3>
      ) : null}
    </>
  );
};

export default ErrorMessage;
