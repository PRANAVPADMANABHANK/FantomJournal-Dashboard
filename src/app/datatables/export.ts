import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './export.html',
})
export class ExportDatatableComponent {
    constructor() {}
    search = '';
    cols = [
        { field: 'id', title: 'Id' },
        { field: 'firstName', title: 'Firstname' },
        { field: 'lastName', title: 'Lastname' },
        { field: 'company', title: 'Company' },
        { field: 'age', title: 'Age' },
        { field: 'dob', title: 'Start Date' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone No.' },
    ];

    rows = [
        {
            id: 1,
            firstName: 'Caroline',
            lastName: 'Jensen',
            email: 'carolinejensen@zidant.com',
            dob: '2004-05-28',
            address: {
                street: '529 Scholes Street',
                city: 'Temperanceville',
                zipcode: 5235,
                geo: {
                    lat: 23.806115,
                    lng: 164.677197,
                },
            },
            phone: '+1 (821) 447-3782',
            isActive: true,
            age: 39,
            company: 'POLARAX',
        },
        {
            id: 2,
            firstName: 'Celeste',
            lastName: 'Grant',
            email: 'celestegrant@polarax.com',
            dob: '1989-11-19',
            address: {
                street: '639 Kimball Street',
                city: 'Bascom',
                zipcode: 8907,
                geo: {
                    lat: 65.954483,
                    lng: 98.906478,
                },
            },
            phone: '+1 (838) 515-3408',
            isActive: false,
            age: 32,
            company: 'MANGLO',
        },
        {
            id: 3,
            firstName: 'Tillman',
            lastName: 'Forbes',
            email: 'tillmanforbes@manglo.com',
            dob: '2016-09-05',
            address: {
                street: '240 Vandalia Avenue',
                city: 'Thynedale',
                zipcode: 8994,
                geo: {
                    lat: -34.949388,
                    lng: -82.958111,
                },
            },
            phone: '+1 (969) 496-2892',
            isActive: false,
            age: 26,
            company: 'APPLIDECK',
        },
        {
            id: 4,
            firstName: 'Daisy',
            lastName: 'Whitley',
            email: 'daisywhitley@applideck.com',
            dob: '1987-03-23',
            address: {
                street: '350 Pleasant Place',
                city: 'Idledale',
                zipcode: 9369,
                geo: {
                    lat: -54.458809,
                    lng: -127.476556,
                },
            },
            phone: '+1 (861) 564-2877',
            isActive: true,
            age: 21,
            company: 'VOLAX',
        },
        {
            id: 5,
            firstName: 'Weber',
            lastName: 'Bowman',
            email: 'weberbowman@volax.com',
            dob: '1983-02-24',
            address: {
                street: '154 Conway Street',
                city: 'Broadlands',
                zipcode: 8131,
                geo: {
                    lat: 54.501351,
                    lng: -167.47138,
                },
            },
            phone: '+1 (962) 466-3483',
            isActive: false,
            age: 26,
            company: 'ORBAXTER',
        },
        {
            id: 6,
            firstName: 'Buckley',
            lastName: 'Townsend',
            email: 'buckleytownsend@orbaxter.com',
            dob: '2011-05-29',
            address: {
                street: '131 Guernsey Street',
                city: 'Vallonia',
                zipcode: 6779,
                geo: {
                    lat: -2.681655,
                    lng: 3.528942,
                },
            },
            phone: '+1 (884) 595-2643',
            isActive: true,
            age: 40,
            company: 'OPPORTECH',
        },
        {
            id: 7,
            firstName: 'Latoya',
            lastName: 'Bradshaw',
            email: 'latoyabradshaw@opportech.com',
            dob: '2010-11-23',
            address: {
                street: '668 Lenox Road',
                city: 'Lowgap',
                zipcode: 992,
                geo: {
                    lat: 36.026423,
                    lng: 130.412198,
                },
            },
            phone: '+1 (906) 474-3155',
            isActive: true,
            age: 24,
            company: 'GORGANIC',
        },
        {
            id: 8,
            firstName: 'Kate',
            lastName: 'Lindsay',
            email: 'katelindsay@gorganic.com',
            dob: '1987-07-02',
            address: {
                street: '773 Harrison Avenue',
                city: 'Carlton',
                zipcode: 5909,
                geo: {
                    lat: 42.464724,
                    lng: -12.948403,
                },
            },
            phone: '+1 (930) 546-2952',
            isActive: true,
            age: 24,
            company: 'AVIT',
        },
        {
            id: 9,
            firstName: 'Marva',
            lastName: 'Sandoval',
            email: 'marvasandoval@avit.com',
            dob: '2010-11-02',
            address: {
                street: '200 Malta Street',
                city: 'Tuskahoma',
                zipcode: 1292,
                geo: {
                    lat: -52.206169,
                    lng: 74.19452,
                },
            },
            phone: '+1 (927) 566-3600',
            isActive: false,
            age: 28,
            company: 'QUILCH',
        },
        {
            id: 10,
            firstName: 'Decker',
            lastName: 'Russell',
            email: 'deckerrussell@quilch.com',
            dob: '1994-04-21',
            address: {
                street: '708 Bath Avenue',
                city: 'Coultervillle',
                zipcode: 1268,
                geo: {
                    lat: -41.550295,
                    lng: -146.598075,
                },
            },
            phone: '+1 (846) 535-3283',
            isActive: false,
            age: 27,
            company: 'MEMORA',
        },
        {
            id: 11,
            firstName: 'Odom',
            lastName: 'Mills',
            email: 'odommills@memora.com',
            dob: '2010-01-24',
            address: {
                street: '907 Blake Avenue',
                city: 'Churchill',
                zipcode: 4400,
                geo: {
                    lat: -56.061694,
                    lng: -130.238523,
                },
            },
            phone: '+1 (995) 525-3402',
            isActive: true,
            age: 34,
            company: 'ZORROMOP',
        },
        {
            id: 12,
            firstName: 'Sellers',
            lastName: 'Walters',
            email: 'sellerswalters@zorromop.com',
            dob: '1975-11-12',
            address: {
                street: '978 Oakland Place',
                city: 'Gloucester',
                zipcode: 3802,
                geo: {
                    lat: 11.732587,
                    lng: 96.118099,
                },
            },
            phone: '+1 (830) 430-3157',
            isActive: true,
            age: 28,
            company: 'ORBOID',
        },
        {
            id: 13,
            firstName: 'Wendi',
            lastName: 'Powers',
            email: 'wendipowers@orboid.com',
            dob: '1979-06-02',
            address: {
                street: '376 Greenpoint Avenue',
                city: 'Elliott',
                zipcode: 9149,
                geo: {
                    lat: -78.159578,
                    lng: -9.835103,
                },
            },
            phone: '+1 (863) 457-2088',
            isActive: true,
            age: 31,
            company: 'SNORUS',
        },
        {
            id: 14,
            firstName: 'Sophie',
            lastName: 'Horn',
            email: 'sophiehorn@snorus.com',
            dob: '2018-09-20',
            address: {
                street: '343 Doughty Street',
                city: 'Homestead',
                zipcode: 330,
                geo: {
                    lat: 65.484087,
                    lng: 137.413998,
                },
            },
            phone: '+1 (885) 418-3948',
            isActive: true,
            age: 22,
            company: 'XTH',
        },
        {
            id: 15,
            firstName: 'Levine',
            lastName: 'Rodriquez',
            email: 'levinerodriquez@xth.com',
            dob: '1973-02-08',
            address: {
                street: '643 Allen Avenue',
                city: 'Weedville',
                zipcode: 8931,
                geo: {
                    lat: -63.185586,
                    lng: 117.327808,
                },
            },
            phone: '+1 (999) 565-3239',
            isActive: true,
            age: 27,
            company: 'COMTRACT',
        },
        {
            id: 16,
            firstName: 'Little',
            lastName: 'Hatfield',
            email: 'littlehatfield@comtract.com',
            dob: '2012-01-03',
            address: {
                street: '194 Anthony Street',
                city: 'Williston',
                zipcode: 7456,
                geo: {
                    lat: 47.480837,
                    lng: 6.085909,
                },
            },
            phone: '+1 (812) 488-3011',
            isActive: false,
            age: 33,
            company: 'ZIDANT',
        },
        {
            id: 17,
            firstName: 'Larson',
            lastName: 'Kelly',
            email: 'larsonkelly@zidant.com',
            dob: '2010-06-14',
            address: {
                street: '978 Indiana Place',
                city: 'Innsbrook',
                zipcode: 639,
                geo: {
                    lat: -71.766732,
                    lng: 150.854345,
                },
            },
            phone: '+1 (892) 484-2162',
            isActive: true,
            age: 20,
            company: 'SUREPLEX',
        },
        {
            id: 18,
            firstName: 'Kendra',
            lastName: 'Molina',
            email: 'kendramolina@sureplex.com',
            dob: '2002-07-19',
            address: {
                street: '567 Charles Place',
                city: 'Kimmell',
                zipcode: 1966,
                geo: {
                    lat: 50.765816,
                    lng: -117.106499,
                },
            },
            phone: '+1 (920) 528-3330',
            isActive: false,
            age: 31,
            company: 'DANJA',
        },
        {
            id: 19,
            firstName: 'Ebony',
            lastName: 'Livingston',
            email: 'ebonylivingston@danja.com',
            dob: '1994-10-18',
            address: {
                street: '284 Cass Place',
                city: 'Navarre',
                zipcode: 948,
                geo: {
                    lat: 65.271256,
                    lng: -83.064729,
                },
            },
            phone: '+1 (970) 591-3039',
            isActive: false,
            age: 33,
            company: 'EURON',
        },
        {
            id: 20,
            firstName: 'Kaufman',
            lastName: 'Rush',
            email: 'kaufmanrush@euron.com',
            dob: '2011-07-10',
            address: {
                street: '408 Kingsland Avenue',
                city: 'Beaulieu',
                zipcode: 7911,
                geo: {
                    lat: 41.513153,
                    lng: 54.821641,
                },
            },
            phone: '+1 (924) 463-2934',
            isActive: false,
            age: 39,
            company: 'ILLUMITY',
        },
        {
            id: 21,
            firstName: 'Frank',
            lastName: 'Hays',
            email: 'frankhays@illumity.com',
            dob: '2005-06-15',
            address: {
                street: '973 Caton Place',
                city: 'Dargan',
                zipcode: 4104,
                geo: {
                    lat: 63.314988,
                    lng: -138.771323,
                },
            },
            phone: '+1 (930) 577-2670',
            isActive: false,
            age: 31,
            company: 'SYBIXTEX',
        },
        {
            id: 22,
            firstName: 'Carmella',
            lastName: 'Mccarty',
            email: 'carmellamccarty@sybixtex.com',
            dob: '1980-03-06',
            address: {
                street: '919 Judge Street',
                city: 'Canby',
                zipcode: 8283,
                geo: {
                    lat: 9.198597,
                    lng: -138.809971,
                },
            },
            phone: '+1 (876) 456-3218',
            isActive: true,
            age: 21,
            company: 'ZEDALIS',
        },
        {
            id: 23,
            firstName: 'Massey',
            lastName: 'Owen',
            email: 'masseyowen@zedalis.com',
            dob: '2012-03-01',
            address: {
                street: '108 Seaview Avenue',
                city: 'Slovan',
                zipcode: 3599,
                geo: {
                    lat: -74.648318,
                    lng: 99.620699,
                },
            },
            phone: '+1 (917) 567-3786',
            isActive: false,
            age: 40,
            company: 'DYNO',
        },
        {
            id: 24,
            firstName: 'Lottie',
            lastName: 'Lowery',
            email: 'lottielowery@dyno.com',
            dob: '1982-10-10',
            address: {
                street: '557 Meserole Avenue',
                city: 'Fowlerville',
                zipcode: 4991,
                geo: {
                    lat: 54.811546,
                    lng: -20.996515,
                },
            },
            phone: '+1 (912) 539-3498',
            isActive: true,
            age: 36,
            company: 'MULTIFLEX',
        },
        {
            id: 25,
            firstName: 'Addie',
            lastName: 'Luna',
            email: 'addieluna@multiflex.com',
            dob: '1988-05-01',
            address: {
                street: '688 Bulwer Place',
                city: 'Harmon',
                zipcode: 7664,
                geo: {
                    lat: -12.762766,
                    lng: -39.924497,
                },
            },
            phone: '+1 (962) 537-2981',
            isActive: true,
            age: 32,
            company: 'PHARMACON',
        },
    ];

    jsonData = this.rows;

    ngOnInit() {
        this.jsonData = this.rows.map((obj: any) => {
            const newObj: any = {};
            this.cols.forEach((col) => {
                newObj[col.field] = obj[col.field];
            });
            return newObj;
        });
    }

    exportTable(type: string) {
        let columns: any = this.cols.map((d: { field: any }) => {
            return d.field;
        });

        let records = this.rows;
        let filename = 'table';

        let newVariable: any;
        newVariable = window.navigator;

        if (type == 'csv') {
            let coldelimiter = ';';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return this.capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item: { [x: string]: any }) => {
                columns.map((d: any, index: number) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !newVariable.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type == 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            columns.map((d: any) => {
                rowhtml += '<th>' + this.capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';

            records.map((item: { [x: string]: any }) => {
                rowhtml += '<tr>';
                columns.map((d: any) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            var winPrint: any = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
            // winPrint.close();
        } else if (type == 'txt') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return this.capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item: { [x: string]: any }) => {
                columns.map((d: any, index: number) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/txt/i) && !newVariable.msSaveOrOpenBlob) {
                var data = 'data:application/txt;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.txt');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob, filename + '.txt');
                }
            }
        }
    }

    excelColumns() {
        return {
            Id: 'id',
            FirstName: 'firstName',
            LastName: 'lastName',
            Company: 'company',
            Age: 'age',
            'Start Date': 'dob',
            Email: 'email',
            'Phone No.': 'phone',
        };
    }

    excelItems() {
        return this.rows;
    }

    capitalize(text: string) {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    }

    formatDate(date: any) {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    }
}
