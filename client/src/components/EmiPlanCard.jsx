function EmiPlanCard({
  plan,
  selected,
  onSelect,
}) {
  return (
    <button
      type="button"
      className={`emi-plan-card ${
        selected ? "selected" : ""
      }`}
      onClick={() => onSelect(plan)}
    >
      <div className="emi-plan-top">
        <strong>{plan.label}</strong>

        {selected && (
          <span className="emi-check">
            ✓
          </span>
        )}
      </div>

      <div className="emi-monthly">
        ₹
        {Number(
          plan.monthlyAmount
        ).toLocaleString("en-IN")}
        <span>/month</span>
      </div>

      <small>
        {plan.interest === 0
          ? "0% Interest"
          : `${plan.interest}% Interest`}
      </small>
    </button>
  );
}

export default EmiPlanCard;