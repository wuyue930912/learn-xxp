package com.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class RtmpExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public RtmpExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andUseridIsNull() {
            addCriterion("userid is null");
            return (Criteria) this;
        }

        public Criteria andUseridIsNotNull() {
            addCriterion("userid is not null");
            return (Criteria) this;
        }

        public Criteria andUseridEqualTo(Integer value) {
            addCriterion("userid =", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridNotEqualTo(Integer value) {
            addCriterion("userid <>", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridGreaterThan(Integer value) {
            addCriterion("userid >", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridGreaterThanOrEqualTo(Integer value) {
            addCriterion("userid >=", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridLessThan(Integer value) {
            addCriterion("userid <", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridLessThanOrEqualTo(Integer value) {
            addCriterion("userid <=", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridIn(List<Integer> values) {
            addCriterion("userid in", values, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridNotIn(List<Integer> values) {
            addCriterion("userid not in", values, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridBetween(Integer value1, Integer value2) {
            addCriterion("userid between", value1, value2, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridNotBetween(Integer value1, Integer value2) {
            addCriterion("userid not between", value1, value2, "userid");
            return (Criteria) this;
        }

        public Criteria andLivertmpIsNull() {
            addCriterion("livertmp is null");
            return (Criteria) this;
        }

        public Criteria andLivertmpIsNotNull() {
            addCriterion("livertmp is not null");
            return (Criteria) this;
        }

        public Criteria andLivertmpEqualTo(String value) {
            addCriterion("livertmp =", value, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpNotEqualTo(String value) {
            addCriterion("livertmp <>", value, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpGreaterThan(String value) {
            addCriterion("livertmp >", value, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpGreaterThanOrEqualTo(String value) {
            addCriterion("livertmp >=", value, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpLessThan(String value) {
            addCriterion("livertmp <", value, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpLessThanOrEqualTo(String value) {
            addCriterion("livertmp <=", value, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpLike(String value) {
            addCriterion("livertmp like", value, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpNotLike(String value) {
            addCriterion("livertmp not like", value, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpIn(List<String> values) {
            addCriterion("livertmp in", values, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpNotIn(List<String> values) {
            addCriterion("livertmp not in", values, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpBetween(String value1, String value2) {
            addCriterion("livertmp between", value1, value2, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivertmpNotBetween(String value1, String value2) {
            addCriterion("livertmp not between", value1, value2, "livertmp");
            return (Criteria) this;
        }

        public Criteria andLivenameIsNull() {
            addCriterion("livename is null");
            return (Criteria) this;
        }

        public Criteria andLivenameIsNotNull() {
            addCriterion("livename is not null");
            return (Criteria) this;
        }

        public Criteria andLivenameEqualTo(String value) {
            addCriterion("livename =", value, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameNotEqualTo(String value) {
            addCriterion("livename <>", value, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameGreaterThan(String value) {
            addCriterion("livename >", value, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameGreaterThanOrEqualTo(String value) {
            addCriterion("livename >=", value, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameLessThan(String value) {
            addCriterion("livename <", value, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameLessThanOrEqualTo(String value) {
            addCriterion("livename <=", value, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameLike(String value) {
            addCriterion("livename like", value, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameNotLike(String value) {
            addCriterion("livename not like", value, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameIn(List<String> values) {
            addCriterion("livename in", values, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameNotIn(List<String> values) {
            addCriterion("livename not in", values, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameBetween(String value1, String value2) {
            addCriterion("livename between", value1, value2, "livename");
            return (Criteria) this;
        }

        public Criteria andLivenameNotBetween(String value1, String value2) {
            addCriterion("livename not between", value1, value2, "livename");
            return (Criteria) this;
        }

        public Criteria andLivetitleIsNull() {
            addCriterion("livetitle is null");
            return (Criteria) this;
        }

        public Criteria andLivetitleIsNotNull() {
            addCriterion("livetitle is not null");
            return (Criteria) this;
        }

        public Criteria andLivetitleEqualTo(String value) {
            addCriterion("livetitle =", value, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleNotEqualTo(String value) {
            addCriterion("livetitle <>", value, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleGreaterThan(String value) {
            addCriterion("livetitle >", value, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleGreaterThanOrEqualTo(String value) {
            addCriterion("livetitle >=", value, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleLessThan(String value) {
            addCriterion("livetitle <", value, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleLessThanOrEqualTo(String value) {
            addCriterion("livetitle <=", value, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleLike(String value) {
            addCriterion("livetitle like", value, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleNotLike(String value) {
            addCriterion("livetitle not like", value, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleIn(List<String> values) {
            addCriterion("livetitle in", values, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleNotIn(List<String> values) {
            addCriterion("livetitle not in", values, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleBetween(String value1, String value2) {
            addCriterion("livetitle between", value1, value2, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivetitleNotBetween(String value1, String value2) {
            addCriterion("livetitle not between", value1, value2, "livetitle");
            return (Criteria) this;
        }

        public Criteria andLivepageIsNull() {
            addCriterion("livepage is null");
            return (Criteria) this;
        }

        public Criteria andLivepageIsNotNull() {
            addCriterion("livepage is not null");
            return (Criteria) this;
        }

        public Criteria andLivepageEqualTo(String value) {
            addCriterion("livepage =", value, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageNotEqualTo(String value) {
            addCriterion("livepage <>", value, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageGreaterThan(String value) {
            addCriterion("livepage >", value, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageGreaterThanOrEqualTo(String value) {
            addCriterion("livepage >=", value, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageLessThan(String value) {
            addCriterion("livepage <", value, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageLessThanOrEqualTo(String value) {
            addCriterion("livepage <=", value, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageLike(String value) {
            addCriterion("livepage like", value, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageNotLike(String value) {
            addCriterion("livepage not like", value, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageIn(List<String> values) {
            addCriterion("livepage in", values, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageNotIn(List<String> values) {
            addCriterion("livepage not in", values, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageBetween(String value1, String value2) {
            addCriterion("livepage between", value1, value2, "livepage");
            return (Criteria) this;
        }

        public Criteria andLivepageNotBetween(String value1, String value2) {
            addCriterion("livepage not between", value1, value2, "livepage");
            return (Criteria) this;
        }

        public Criteria andLiveimageIsNull() {
            addCriterion("liveimage is null");
            return (Criteria) this;
        }

        public Criteria andLiveimageIsNotNull() {
            addCriterion("liveimage is not null");
            return (Criteria) this;
        }

        public Criteria andLiveimageEqualTo(String value) {
            addCriterion("liveimage =", value, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageNotEqualTo(String value) {
            addCriterion("liveimage <>", value, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageGreaterThan(String value) {
            addCriterion("liveimage >", value, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageGreaterThanOrEqualTo(String value) {
            addCriterion("liveimage >=", value, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageLessThan(String value) {
            addCriterion("liveimage <", value, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageLessThanOrEqualTo(String value) {
            addCriterion("liveimage <=", value, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageLike(String value) {
            addCriterion("liveimage like", value, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageNotLike(String value) {
            addCriterion("liveimage not like", value, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageIn(List<String> values) {
            addCriterion("liveimage in", values, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageNotIn(List<String> values) {
            addCriterion("liveimage not in", values, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageBetween(String value1, String value2) {
            addCriterion("liveimage between", value1, value2, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLiveimageNotBetween(String value1, String value2) {
            addCriterion("liveimage not between", value1, value2, "liveimage");
            return (Criteria) this;
        }

        public Criteria andLivestateIsNull() {
            addCriterion("livestate is null");
            return (Criteria) this;
        }

        public Criteria andLivestateIsNotNull() {
            addCriterion("livestate is not null");
            return (Criteria) this;
        }

        public Criteria andLivestateEqualTo(Integer value) {
            addCriterion("livestate =", value, "livestate");
            return (Criteria) this;
        }

        public Criteria andLivestateNotEqualTo(Integer value) {
            addCriterion("livestate <>", value, "livestate");
            return (Criteria) this;
        }

        public Criteria andLivestateGreaterThan(Integer value) {
            addCriterion("livestate >", value, "livestate");
            return (Criteria) this;
        }

        public Criteria andLivestateGreaterThanOrEqualTo(Integer value) {
            addCriterion("livestate >=", value, "livestate");
            return (Criteria) this;
        }

        public Criteria andLivestateLessThan(Integer value) {
            addCriterion("livestate <", value, "livestate");
            return (Criteria) this;
        }

        public Criteria andLivestateLessThanOrEqualTo(Integer value) {
            addCriterion("livestate <=", value, "livestate");
            return (Criteria) this;
        }

        public Criteria andLivestateIn(List<Integer> values) {
            addCriterion("livestate in", values, "livestate");
            return (Criteria) this;
        }

        public Criteria andLivestateNotIn(List<Integer> values) {
            addCriterion("livestate not in", values, "livestate");
            return (Criteria) this;
        }

        public Criteria andLivestateBetween(Integer value1, Integer value2) {
            addCriterion("livestate between", value1, value2, "livestate");
            return (Criteria) this;
        }

        public Criteria andLivestateNotBetween(Integer value1, Integer value2) {
            addCriterion("livestate not between", value1, value2, "livestate");
            return (Criteria) this;
        }

        public Criteria andRed5urlIsNull() {
            addCriterion("red5url is null");
            return (Criteria) this;
        }

        public Criteria andRed5urlIsNotNull() {
            addCriterion("red5url is not null");
            return (Criteria) this;
        }

        public Criteria andRed5urlEqualTo(String value) {
            addCriterion("red5url =", value, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlNotEqualTo(String value) {
            addCriterion("red5url <>", value, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlGreaterThan(String value) {
            addCriterion("red5url >", value, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlGreaterThanOrEqualTo(String value) {
            addCriterion("red5url >=", value, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlLessThan(String value) {
            addCriterion("red5url <", value, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlLessThanOrEqualTo(String value) {
            addCriterion("red5url <=", value, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlLike(String value) {
            addCriterion("red5url like", value, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlNotLike(String value) {
            addCriterion("red5url not like", value, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlIn(List<String> values) {
            addCriterion("red5url in", values, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlNotIn(List<String> values) {
            addCriterion("red5url not in", values, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlBetween(String value1, String value2) {
            addCriterion("red5url between", value1, value2, "red5url");
            return (Criteria) this;
        }

        public Criteria andRed5urlNotBetween(String value1, String value2) {
            addCriterion("red5url not between", value1, value2, "red5url");
            return (Criteria) this;
        }

        public Criteria andCreatetimeIsNull() {
            addCriterion("createtime is null");
            return (Criteria) this;
        }

        public Criteria andCreatetimeIsNotNull() {
            addCriterion("createtime is not null");
            return (Criteria) this;
        }

        public Criteria andCreatetimeEqualTo(Date value) {
            addCriterion("createtime =", value, "createtime");
            return (Criteria) this;
        }

        public Criteria andCreatetimeNotEqualTo(Date value) {
            addCriterion("createtime <>", value, "createtime");
            return (Criteria) this;
        }

        public Criteria andCreatetimeGreaterThan(Date value) {
            addCriterion("createtime >", value, "createtime");
            return (Criteria) this;
        }

        public Criteria andCreatetimeGreaterThanOrEqualTo(Date value) {
            addCriterion("createtime >=", value, "createtime");
            return (Criteria) this;
        }

        public Criteria andCreatetimeLessThan(Date value) {
            addCriterion("createtime <", value, "createtime");
            return (Criteria) this;
        }

        public Criteria andCreatetimeLessThanOrEqualTo(Date value) {
            addCriterion("createtime <=", value, "createtime");
            return (Criteria) this;
        }

        public Criteria andCreatetimeIn(List<Date> values) {
            addCriterion("createtime in", values, "createtime");
            return (Criteria) this;
        }

        public Criteria andCreatetimeNotIn(List<Date> values) {
            addCriterion("createtime not in", values, "createtime");
            return (Criteria) this;
        }

        public Criteria andCreatetimeBetween(Date value1, Date value2) {
            addCriterion("createtime between", value1, value2, "createtime");
            return (Criteria) this;
        }

        public Criteria andCreatetimeNotBetween(Date value1, Date value2) {
            addCriterion("createtime not between", value1, value2, "createtime");
            return (Criteria) this;
        }

        public Criteria andBzIsNull() {
            addCriterion("bz is null");
            return (Criteria) this;
        }

        public Criteria andBzIsNotNull() {
            addCriterion("bz is not null");
            return (Criteria) this;
        }

        public Criteria andBzEqualTo(String value) {
            addCriterion("bz =", value, "bz");
            return (Criteria) this;
        }

        public Criteria andBzNotEqualTo(String value) {
            addCriterion("bz <>", value, "bz");
            return (Criteria) this;
        }

        public Criteria andBzGreaterThan(String value) {
            addCriterion("bz >", value, "bz");
            return (Criteria) this;
        }

        public Criteria andBzGreaterThanOrEqualTo(String value) {
            addCriterion("bz >=", value, "bz");
            return (Criteria) this;
        }

        public Criteria andBzLessThan(String value) {
            addCriterion("bz <", value, "bz");
            return (Criteria) this;
        }

        public Criteria andBzLessThanOrEqualTo(String value) {
            addCriterion("bz <=", value, "bz");
            return (Criteria) this;
        }

        public Criteria andBzLike(String value) {
            addCriterion("bz like", value, "bz");
            return (Criteria) this;
        }

        public Criteria andBzNotLike(String value) {
            addCriterion("bz not like", value, "bz");
            return (Criteria) this;
        }

        public Criteria andBzIn(List<String> values) {
            addCriterion("bz in", values, "bz");
            return (Criteria) this;
        }

        public Criteria andBzNotIn(List<String> values) {
            addCriterion("bz not in", values, "bz");
            return (Criteria) this;
        }

        public Criteria andBzBetween(String value1, String value2) {
            addCriterion("bz between", value1, value2, "bz");
            return (Criteria) this;
        }

        public Criteria andBzNotBetween(String value1, String value2) {
            addCriterion("bz not between", value1, value2, "bz");
            return (Criteria) this;
        }

        public Criteria andTopIsNull() {
            addCriterion("top is null");
            return (Criteria) this;
        }

        public Criteria andTopIsNotNull() {
            addCriterion("top is not null");
            return (Criteria) this;
        }

        public Criteria andTopEqualTo(Integer value) {
            addCriterion("top =", value, "top");
            return (Criteria) this;
        }

        public Criteria andTopNotEqualTo(Integer value) {
            addCriterion("top <>", value, "top");
            return (Criteria) this;
        }

        public Criteria andTopGreaterThan(Integer value) {
            addCriterion("top >", value, "top");
            return (Criteria) this;
        }

        public Criteria andTopGreaterThanOrEqualTo(Integer value) {
            addCriterion("top >=", value, "top");
            return (Criteria) this;
        }

        public Criteria andTopLessThan(Integer value) {
            addCriterion("top <", value, "top");
            return (Criteria) this;
        }

        public Criteria andTopLessThanOrEqualTo(Integer value) {
            addCriterion("top <=", value, "top");
            return (Criteria) this;
        }

        public Criteria andTopIn(List<Integer> values) {
            addCriterion("top in", values, "top");
            return (Criteria) this;
        }

        public Criteria andTopNotIn(List<Integer> values) {
            addCriterion("top not in", values, "top");
            return (Criteria) this;
        }

        public Criteria andTopBetween(Integer value1, Integer value2) {
            addCriterion("top between", value1, value2, "top");
            return (Criteria) this;
        }

        public Criteria andTopNotBetween(Integer value1, Integer value2) {
            addCriterion("top not between", value1, value2, "top");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}