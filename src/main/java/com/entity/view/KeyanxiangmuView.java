package com.entity.view;

import org.apache.tools.ant.util.DateUtils;
import com.annotation.ColumnInfo;
import com.entity.KeyanxiangmuEntity;
import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;
import com.utils.DateUtil;

/**
* 科研项目
* 后端返回视图实体辅助类
* （通常后端关联的表或者自定义的字段需要返回使用）
*/
@TableName("keyanxiangmu")
public class KeyanxiangmuView extends KeyanxiangmuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	//当前表
	/**
	* 项目等级的值
	*/
	@ColumnInfo(comment="项目等级的字典表值",type="varchar(200)")
	private String dengjiValue;
	/**
	* 学科的值
	*/
	@ColumnInfo(comment="学科的字典表值",type="varchar(200)")
	private String xuekeValue;
	/**
	* 申请状态的值
	*/
	@ColumnInfo(comment="申请状态的字典表值",type="varchar(200)")
	private String keyanxiangmuYesnoValue;

	//级联表 科研人员
							/**
		* 科研人员编号
		*/

		@ColumnInfo(comment="科研人员编号",type="varchar(200)")
		private String yonghuUuidNumber;
		/**
		* 科研人员姓名
		*/

		@ColumnInfo(comment="科研人员姓名",type="varchar(200)")
		private String yonghuName;
		/**
		* 科研人员手机号
		*/

		@ColumnInfo(comment="科研人员手机号",type="varchar(200)")
		private String yonghuPhone;
		/**
		* 科研人员身份证号
		*/

		@ColumnInfo(comment="科研人员身份证号",type="varchar(200)")
		private String yonghuIdNumber;
		/**
		* 科研人员头像
		*/

		@ColumnInfo(comment="科研人员头像",type="varchar(200)")
		private String yonghuPhoto;
		/**
		* 年龄
		*/

		@ColumnInfo(comment="年龄",type="int(11)")
		private Integer age;
		/**
		* 电子邮箱
		*/

		@ColumnInfo(comment="电子邮箱",type="varchar(200)")
		private String yonghuEmail;
		/**
		* 职务
		*/
		@ColumnInfo(comment="职务",type="int(11)")
		private Integer zhiwuTypes;
			/**
			* 职务的值
			*/
			@ColumnInfo(comment="职务的字典表值",type="varchar(200)")
			private String zhiwuValue;
		/**
		* 职称
		*/
		@ColumnInfo(comment="职称",type="int(11)")
		private Integer zhichengTypes;
			/**
			* 职称的值
			*/
			@ColumnInfo(comment="职称的字典表值",type="varchar(200)")
			private String zhichengValue;
		/**
		* 学历
		*/
		@ColumnInfo(comment="学历",type="int(11)")
		private Integer xueliTypes;
			/**
			* 学历的值
			*/
			@ColumnInfo(comment="学历的字典表值",type="varchar(200)")
			private String xueliValue;



	public KeyanxiangmuView() {

	}

	public KeyanxiangmuView(KeyanxiangmuEntity keyanxiangmuEntity) {
		try {
			BeanUtils.copyProperties(this, keyanxiangmuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}



	//当前表的
	/**
	* 获取： 项目等级的值
	*/
	public String getDengjiValue() {
		return dengjiValue;
	}
	/**
	* 设置： 项目等级的值
	*/
	public void setDengjiValue(String dengjiValue) {
		this.dengjiValue = dengjiValue;
	}
	//当前表的
	/**
	* 获取： 学科的值
	*/
	public String getXuekeValue() {
		return xuekeValue;
	}
	/**
	* 设置： 学科的值
	*/
	public void setXuekeValue(String xuekeValue) {
		this.xuekeValue = xuekeValue;
	}
	//当前表的
	/**
	* 获取： 申请状态的值
	*/
	public String getKeyanxiangmuYesnoValue() {
		return keyanxiangmuYesnoValue;
	}
	/**
	* 设置： 申请状态的值
	*/
	public void setKeyanxiangmuYesnoValue(String keyanxiangmuYesnoValue) {
		this.keyanxiangmuYesnoValue = keyanxiangmuYesnoValue;
	}


	//级联表的get和set 科研人员

		/**
		* 获取： 科研人员编号
		*/
		public String getYonghuUuidNumber() {
			return yonghuUuidNumber;
		}
		/**
		* 设置： 科研人员编号
		*/
		public void setYonghuUuidNumber(String yonghuUuidNumber) {
			this.yonghuUuidNumber = yonghuUuidNumber;
		}

		/**
		* 获取： 科研人员姓名
		*/
		public String getYonghuName() {
			return yonghuName;
		}
		/**
		* 设置： 科研人员姓名
		*/
		public void setYonghuName(String yonghuName) {
			this.yonghuName = yonghuName;
		}

		/**
		* 获取： 科研人员手机号
		*/
		public String getYonghuPhone() {
			return yonghuPhone;
		}
		/**
		* 设置： 科研人员手机号
		*/
		public void setYonghuPhone(String yonghuPhone) {
			this.yonghuPhone = yonghuPhone;
		}

		/**
		* 获取： 科研人员身份证号
		*/
		public String getYonghuIdNumber() {
			return yonghuIdNumber;
		}
		/**
		* 设置： 科研人员身份证号
		*/
		public void setYonghuIdNumber(String yonghuIdNumber) {
			this.yonghuIdNumber = yonghuIdNumber;
		}

		/**
		* 获取： 科研人员头像
		*/
		public String getYonghuPhoto() {
			return yonghuPhoto;
		}
		/**
		* 设置： 科研人员头像
		*/
		public void setYonghuPhoto(String yonghuPhoto) {
			this.yonghuPhoto = yonghuPhoto;
		}

		/**
		* 获取： 年龄
		*/
		public Integer getAge() {
			return age;
		}
		/**
		* 设置： 年龄
		*/
		public void setAge(Integer age) {
			this.age = age;
		}

		/**
		* 获取： 电子邮箱
		*/
		public String getYonghuEmail() {
			return yonghuEmail;
		}
		/**
		* 设置： 电子邮箱
		*/
		public void setYonghuEmail(String yonghuEmail) {
			this.yonghuEmail = yonghuEmail;
		}
		/**
		* 获取： 职务
		*/
		public Integer getZhiwuTypes() {
			return zhiwuTypes;
		}
		/**
		* 设置： 职务
		*/
		public void setZhiwuTypes(Integer zhiwuTypes) {
			this.zhiwuTypes = zhiwuTypes;
		}


			/**
			* 获取： 职务的值
			*/
			public String getZhiwuValue() {
				return zhiwuValue;
			}
			/**
			* 设置： 职务的值
			*/
			public void setZhiwuValue(String zhiwuValue) {
				this.zhiwuValue = zhiwuValue;
			}
		/**
		* 获取： 职称
		*/
		public Integer getZhichengTypes() {
			return zhichengTypes;
		}
		/**
		* 设置： 职称
		*/
		public void setZhichengTypes(Integer zhichengTypes) {
			this.zhichengTypes = zhichengTypes;
		}


			/**
			* 获取： 职称的值
			*/
			public String getZhichengValue() {
				return zhichengValue;
			}
			/**
			* 设置： 职称的值
			*/
			public void setZhichengValue(String zhichengValue) {
				this.zhichengValue = zhichengValue;
			}
		/**
		* 获取： 学历
		*/
		public Integer getXueliTypes() {
			return xueliTypes;
		}
		/**
		* 设置： 学历
		*/
		public void setXueliTypes(Integer xueliTypes) {
			this.xueliTypes = xueliTypes;
		}


			/**
			* 获取： 学历的值
			*/
			public String getXueliValue() {
				return xueliValue;
			}
			/**
			* 设置： 学历的值
			*/
			public void setXueliValue(String xueliValue) {
				this.xueliValue = xueliValue;
			}


	@Override
	public String toString() {
		return "KeyanxiangmuView{" +
			", dengjiValue=" + dengjiValue +
			", xuekeValue=" + xuekeValue +
			", keyanxiangmuYesnoValue=" + keyanxiangmuYesnoValue +
			", yonghuUuidNumber=" + yonghuUuidNumber +
			", yonghuName=" + yonghuName +
			", yonghuPhone=" + yonghuPhone +
			", yonghuIdNumber=" + yonghuIdNumber +
			", yonghuPhoto=" + yonghuPhoto +
			", age=" + age +
			", yonghuEmail=" + yonghuEmail +
			"} " + super.toString();
	}
}
