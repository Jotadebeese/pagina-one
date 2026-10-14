import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#0f172a',
    backgroundColor: '#ffffff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 20,
  },
  brandTitle: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  brandSubtitle: {
    fontSize: 9,
    color: '#64748b',
  },
  invoiceTitle: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: '#2563eb',
    textAlign: 'right',
  },
  metaText: {
    fontSize: 9,
    color: '#475569',
    textAlign: 'right',
    marginTop: 2,
  },
  addressSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  addressBox: {
    width: '45%',
  },
  sectionTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: '#94a3b8',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  addressName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    marginBottom: 2,
  },
  addressDetail: {
    fontSize: 9,
    color: '#475569',
    lineHeight: 1.4,
  },
  table: {
    marginBottom: 25,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingVertical: 7,
    paddingHorizontal: 8,
  },
  colDesc: { width: '50%' },
  colHours: { width: '15%', textAlign: 'right' },
  colRate: { width: '15%', textAlign: 'right' },
  colAmount: { width: '20%', textAlign: 'right' },
  headerColText: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: '#475569',
    textTransform: 'uppercase',
  },
  totalsSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  totalsBox: {
    width: '40%',
  },
  totalsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  totalLabel: {
    fontSize: 9,
    color: '#475569',
  },
  totalValue: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
  },
  grandTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1.5,
    borderTopColor: '#0f172a',
    paddingTop: 6,
    marginTop: 4,
  },
  grandTotalLabel: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
  },
  grandTotalValue: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#2563eb',
  },
  bankDetailsSection: {
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  bankTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  bankText: {
    fontSize: 8,
    color: '#475569',
    lineHeight: 1.4,
  },
});

export interface InvoiceData {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  contractorName: string;
  contractorTaxId?: string;
  contractorEmail: string;
  clientName: string;
  clientCompany: string;
  clientAddress?: string;
  currency: string;
  items: Array<{
    description: string;
    hours: number;
    rate: number;
    amount: number;
  }>;
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
  bankDetails?: {
    bankName: string;
    accountName: string;
    bsbOrRouting: string;
    accountNumber: string;
    swiftCode?: string;
    iban?: string;
  };
}

export function InvoicePDFDocument({ invoice }: { invoice: InvoiceData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.brandTitle}>{invoice.contractorName}</Text>
            <Text style={styles.brandSubtitle}>Software Engineering & Consulting</Text>
            {invoice.contractorTaxId && (
              <Text style={styles.brandSubtitle}>Tax ID / ABN: {invoice.contractorTaxId}</Text>
            )}
          </View>
          <View>
            <Text style={styles.invoiceTitle}>INVOICE</Text>
            <Text style={styles.metaText}>Invoice #: {invoice.invoiceNumber}</Text>
            <Text style={styles.metaText}>Date: {invoice.issueDate}</Text>
            <Text style={styles.metaText}>Due Date: {invoice.dueDate}</Text>
          </View>
        </View>

        {/* Bill To / From */}
        <View style={styles.addressSection}>
          <View style={styles.addressBox}>
            <Text style={styles.sectionTitle}>BILLED TO:</Text>
            <Text style={styles.addressName}>{invoice.clientCompany}</Text>
            <Text style={styles.addressDetail}>Attn: {invoice.clientName}</Text>
            {invoice.clientAddress && (
              <Text style={styles.addressDetail}>{invoice.clientAddress}</Text>
            )}
          </View>
          <View style={styles.addressBox}>
            <Text style={styles.sectionTitle}>PAYABLE TO:</Text>
            <Text style={styles.addressName}>{invoice.contractorName}</Text>
            <Text style={styles.addressDetail}>{invoice.contractorEmail}</Text>
          </View>
        </View>

        {/* Line Items Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.colDesc}><Text style={styles.headerColText}>Description</Text></View>
            <View style={styles.colHours}><Text style={styles.headerColText}>Hours</Text></View>
            <View style={styles.colRate}><Text style={styles.headerColText}>Rate</Text></View>
            <View style={styles.colAmount}><Text style={styles.headerColText}>Amount ({invoice.currency})</Text></View>
          </View>

          {invoice.items.map((item, idx) => (
            <View key={idx} style={styles.tableRow}>
              <View style={styles.colDesc}><Text>{item.description}</Text></View>
              <View style={styles.colHours}><Text>{item.hours.toFixed(2)}</Text></View>
              <View style={styles.colRate}><Text>${item.rate.toFixed(2)}</Text></View>
              <View style={styles.colAmount}><Text>${item.amount.toFixed(2)}</Text></View>
            </View>
          ))}
        </View>

        {/* Totals */}
        <View style={styles.totalsSection}>
          <View style={styles.totalsBox}>
            <View style={styles.totalsRow}>
              <Text style={styles.totalLabel}>Subtotal:</Text>
              <Text style={styles.totalValue}>${invoice.subtotal.toFixed(2)}</Text>
            </View>
            {invoice.taxRate > 0 && (
              <View style={styles.totalsRow}>
                <Text style={styles.totalLabel}>Tax ({invoice.taxRate}%):</Text>
                <Text style={styles.totalValue}>${invoice.taxAmount.toFixed(2)}</Text>
              </View>
            )}
            <View style={styles.grandTotalRow}>
              <Text style={styles.grandTotalLabel}>Total Due ({invoice.currency}):</Text>
              <Text style={styles.grandTotalValue}>${invoice.totalAmount.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        {/* Wire / Banking Details */}
        {invoice.bankDetails && (
          <View style={styles.bankDetailsSection}>
            <Text style={styles.bankTitle}>Payment & Wire Instructions</Text>
            <Text style={styles.bankText}>Bank: {invoice.bankDetails.bankName}</Text>
            <Text style={styles.bankText}>Account Name: {invoice.bankDetails.accountName}</Text>
            <Text style={styles.bankText}>BSB / Routing: {invoice.bankDetails.bsbOrRouting} | Account Number: {invoice.bankDetails.accountNumber}</Text>
            {invoice.bankDetails.swiftCode && (
              <Text style={styles.bankText}>SWIFT/BIC: {invoice.bankDetails.swiftCode}</Text>
            )}
          </View>
        )}
      </Page>
    </Document>
  );
}
