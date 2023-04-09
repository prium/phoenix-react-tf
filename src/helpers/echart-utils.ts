import dayjs from 'dayjs';
import { CallbackDataParams } from 'echarts/types/dist/shared';

export const tooltipFormatter = (
  params: CallbackDataParams[],
  dateFormatter: string = 'MMM DD'
) => {
  let tooltipItem = ``;
  params.forEach(el => {
    tooltipItem += `<div class='ms-1'>
        <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${
          el.borderColor ? el.borderColor : el.color
        }"></span>
          ${el.seriesName} : ${el.value}
        </h6>
      </div>`;
  });
  return `<div>
            <p class='mb-2 text-600'>
              ${
                dayjs(params[0].name).isValid()
                  ? dayjs(params[0].name).format(dateFormatter)
                  : params[0].name
              }
            </p>
            ${tooltipItem}
          </div>`;
};
