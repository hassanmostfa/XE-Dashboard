import React from 'react';
import Header from '../../../Components/Admin Components/header/Header';
import SideNav from '../../../Components/Admin Components/sideNav/SideNav';
import PageHeader from '../../../Components/Common/page header/PageHeader';

const Transactions = () => {
  // Sample transactions data
  const transactionsData = [
    {
      id: 1,
      client_name: 'Ahmed Attia',
      service: 'Haircut',
      amount: 50.00,
      payment_status: 'Paid',
      transaction_date: '2024-10-01',
    },
    {
      id: 2,
      client_name: 'Sara Ali',
      service: 'Manicure',
      amount: 100.00,
      payment_status: 'Pending',
      transaction_date: '2024-10-02',
    },
    {
      id: 3,
      client_name: 'Mohamed Salah',
      service: 'Massage',
      amount: 150.00,
      payment_status: 'Paid',
      transaction_date: '2024-10-03',
    },
  ];

  return (
    <div>
      <Header />
      <div className="page-body-wrapper">
        <SideNav />
        <div className="add_user_container">
          <div style={{ marginTop: '30px' }}>
            <PageHeader name="المعاملات المالية" icon="fa fa-credit-card" />
          </div>
          <div className="row content-wrapper">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="p-3">
                  <h3 className="latest_users mt-2 mb-3 text-center">
                    <i
                      className="fa fa-angle-double-left"
                      aria-hidden="true"
                    ></i>
                    كل المعاملات المالية
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                    <hr />
                  </h3>
                  <div className="table-responsive">
                    <table className="table text-center table-hover">
                      <thead className="table-dark">
                        <tr style={{ fontWeight: 'bold' }}>
                          <th>رقم المعاملة</th>
                          <th>العميل</th>
                          <th>الخدمة</th>
                          <th>المبلغ</th>
                          <th>حالة الدفع</th>
                          <th>تاريخ المعاملة</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactionsData.map((transaction) => (
                          <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.client_name}</td>
                            <td>{transaction.service}</td>
                            <td>{transaction.amount.toFixed(2)} ريال</td>
                            <td>
                              <span
                                className={`badge ${
                                  transaction.payment_status === 'Paid'
                                    ? 'badge-success'
                                    : 'badge-warning'
                                }`}
                              >
                                {transaction.payment_status}
                              </span>
                            </td>
                            <td>{transaction.transaction_date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
